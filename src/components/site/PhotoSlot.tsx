import { User, Users } from "lucide-react";

const skillQuestPhoto = { url: "/gallery/photo-08.webp" };

/**
 * PhotoSlot — Image frame component.
 * Displays photo asset when available, or styled team badge avatar as placeholder.
 */
export function PhotoSlot({
  label,
  ratio = "aspect-[4/5]",
  imageUrl,
}: {
  label?: string;
  ratio?: string;
  imageUrl?: string;
}) {
  return (
    <div
      className={`${ratio} w-full overflow-hidden rounded-xl ${
        imageUrl ? "border border-border/60" : "border border-dashed border-border"
      } bg-surface`}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={label ?? "Photo"}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      ) : label?.includes("Skill Quest") ? (
        <img src={skillQuestPhoto.url} alt="Skill Quest participants on stage" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_50%_30%,color-mix(in_oklab,var(--primary)_14%,transparent),transparent_70%)]">
          <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            {label ?? "Photo"}
          </span>
        </div>
      )}
    </div>
  );
}
