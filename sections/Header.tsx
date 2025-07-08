import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  image: ImageWidget;
  alt?: string;
  height?: number;
  width?: number;
  buttons?: {
    text: string;
    href: string;
  }[];
}

export default function Header({
  image = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4959/d7aa9290-074f-417c-99c3-5b0587c8c2ee",
  alt = "Made with deco.cx",
  height = 20,
  width = 50,
  buttons = [],
}: Props) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 16px" }}>
      {image && (
          <Image
            src={image || ""}
            alt={alt || ""}
            height={height || 20}
            width={width || 50}
          />
        )}
    </div>
  );
}
