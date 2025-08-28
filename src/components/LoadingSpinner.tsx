import { Loader } from "@/components/ui/loader";

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <Loader size="lg" />
    </div>
  );
}