import { useEffect } from "react";

export default function useClickOutside(ref, optionsId, cb) {
    useEffect(() => {
        function handleClickOutside(e) {
            if (ref.current && !ref.current.contains(e.target) && e.target.id !== optionsId) {
                cb();
            }
        }
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [ref, cb])
}