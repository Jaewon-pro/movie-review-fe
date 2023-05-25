
const useConfirm = (message, onConfirm, onCancel = null) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    console.log("올바른 확인 함수가 아님!!");
    return;
  }

  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      if (onCancel && typeof onCancel === "function") {
        onCancel();
      }
    }
  };

  return confirmAction;
};

export default useConfirm;
