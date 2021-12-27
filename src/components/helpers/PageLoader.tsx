import { useProgress, Html } from "@react-three/drei";

export default function PageLoader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <span style={{ color: "black", fontWeight: "bold" }}>
        {progress} % loaded
      </span>
    </Html>
  );
}
