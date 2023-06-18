import { useEffect } from "react";

const useEffectTitle = (title) => {
  useEffect(() => {
    document.title = title ? `${title}` : 'Sportify';
  });
};

export default useEffectTitle;
