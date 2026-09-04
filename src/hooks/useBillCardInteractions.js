import { useEffect } from "react";

export default function useBillCardInteractions() {
  useEffect(() => {
    const draggables = Array.from(document.querySelectorAll(".draggable"));
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const rowBillMoveLimit = 72;
    let activeBill = null;
    let initialX = 0;
    let initialY = 0;

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
          y: parseFloat(element.dataset.y || "0")
        };
      }
    }

    function isRowBill(element) {
      return element.closest(".bills-row") !== null;
    }

    function getRowBillMoveLimit() {
      return window.matchMedia("(max-width: 640px)").matches ? 34 : rowBillMoveLimit;
    }

    function clamp(value, min, max) {
      return Math.min(Math.max(value, min), max);
    }

    function getConstrainedTranslate(element, x, y) {
      if (!isRowBill(element)) {
        return { x, y };
      }

      const limit = getRowBillMoveLimit();
      return {
        x: clamp(x, -limit, limit),
        y: 0
      };
    }

    function handleParallax(event) {
      if (prefersReducedMotion || activeBill) return;

      const mouseX = event.clientX / window.innerWidth - 0.5;
      const mouseY = event.clientY / window.innerHeight - 0.5;

      draggables.forEach((bill) => {
        const speed = parseFloat(bill.dataset.speed || "0.05");
        const baseX = parseFloat(bill.dataset.x || "0");
        const baseY = parseFloat(bill.dataset.y || "0");
        const next = getConstrainedTranslate(
          bill,
          baseX + mouseX * speed * 1000,
          baseY + mouseY * speed * 1000
        );
        bill.style.transform = `translate(${next.x}px, ${next.y}px)`;
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

      const next = getConstrainedTranslate(
        activeBill,
        event.clientX - initialX,
        event.clientY - initialY
      );

      activeBill.dataset.x = String(next.x);
      activeBill.dataset.y = String(next.y);
      activeBill.style.transform = `translate(${next.x}px, ${next.y}px)`;
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

    return () => {
      draggables.forEach((bill) => {
        bill.removeEventListener("pointerdown", handlePointerDown);
      });
      document.removeEventListener("pointermove", handleParallax);
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerup", handlePointerUp);
      document.removeEventListener("pointercancel", handlePointerUp);
    };
  }, []);
}
