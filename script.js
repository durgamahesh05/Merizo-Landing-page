(function () {
  const draggables = Array.from(document.querySelectorAll(".draggable"));
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let activeBill = null;
  let initialX = 0;
  let initialY = 0;
  const playStoreUrl = "https://play.google.com/store/search?q=Merizo&c=apps";
  const appStoreUrl = "https://apps.apple.com/us/search?term=Merizo";

  function isIOSDevice() {
    return (
      /iPad|iPhone|iPod/i.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
    );
  }

  function routeToApp() {
    if (/Android/i.test(navigator.userAgent)) {
      window.location.href = playStoreUrl;
      return;
    }

    if (isIOSDevice()) {
      window.location.href = appStoreUrl;
      return;
    }

    window.location.href = "/login";
  }

  document.querySelectorAll("[data-open-app]").forEach((control) => {
    control.addEventListener("click", routeToApp);
  });

  function getCurrentTranslate(element) {
    const style = window.getComputedStyle(element);
    if (!style.transform || style.transform === "none") {
      return { x: 0, y: 0 };
    }

    try {
      const matrix = new DOMMatrixReadOnly(style.transform);
      return { x: matrix.m41, y: matrix.m42 };
    } catch {
      return {
        x: parseFloat(element.dataset.x || "0"),
        y: parseFloat(element.dataset.y || "0"),
      };
    }
  }

  function handleParallax(event) {
    if (prefersReducedMotion || activeBill) return;

    const mouseX = event.clientX / window.innerWidth - 0.5;
    const mouseY = event.clientY / window.innerHeight - 0.5;

    draggables.forEach((bill) => {
      const speed = parseFloat(bill.dataset.speed || "0.05");
      const baseX = parseFloat(bill.dataset.x || "0");
      const baseY = parseFloat(bill.dataset.y || "0");
      const x = baseX + mouseX * speed * 1000;
      const y = baseY + mouseY * speed * 1000;
      bill.style.transform = `translate(${x}px, ${y}px)`;
    });
  }

  function handlePointerDown(event) {
    if (!(event.currentTarget instanceof HTMLElement)) return;

    activeBill = event.currentTarget;
    activeBill.classList.add("dragging");
    activeBill.setPointerCapture?.(event.pointerId);

    draggables.forEach((bill) => {
      bill.style.zIndex = "1";
    });
    activeBill.style.zIndex = "100";

    const translate = getCurrentTranslate(activeBill);
    initialX = event.clientX - translate.x;
    initialY = event.clientY - translate.y;
    activeBill.style.transition = "none";
  }

  function handlePointerMove(event) {
    if (!activeBill) return;
    event.preventDefault();

    const currentX = event.clientX - initialX;
    const currentY = event.clientY - initialY;

    activeBill.dataset.x = String(currentX);
    activeBill.dataset.y = String(currentY);
    activeBill.style.transform = `translate(${currentX}px, ${currentY}px)`;
  }

  function handlePointerUp(event) {
    if (!activeBill) return;

    activeBill.releasePointerCapture?.(event.pointerId);
    activeBill.classList.remove("dragging");
    activeBill.style.transition = "transform 0.1s ease-out";
    activeBill = null;
  }

  draggables.forEach((bill) => {
    bill.addEventListener("pointerdown", handlePointerDown);
  });

  document.addEventListener("pointermove", handleParallax);
  document.addEventListener("pointermove", handlePointerMove, { passive: false });
  document.addEventListener("pointerup", handlePointerUp);
  document.addEventListener("pointercancel", handlePointerUp);
})();
