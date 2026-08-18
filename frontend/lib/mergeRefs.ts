export default function mergeRefs<T>(
  ...refs: (React.Ref<T> | undefined)[]
) {
  return (value: T | null) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref) {
        ref.current = value;
      }
    });
  };
}