import { User, Users } from "lucide-react";

const skillQuestPhoto = { url: "/gallery/photo-08.webp" };

/**
 * PhotoSlot — Image frame component.
 * Displays photo asset when available, or styled team badge avatar as placeholder.
 */
export function PhotoSlot({ label, ratio = "aspect-[4/5]" }: { label?: string; ratio?: string }) {
  const isSkillQuest = label?.includes("Skill Quest");

  return (
    <div
      className={`${ratio} relative w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-inner flex items-center justify-center`}
    >
      {isSkillQuest ? (
        <img
          src={skillQuestPhoto.url}
          alt="Skill Quest participants on stage"
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center p-4 text-center bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--primary)_15%,transparent),transparent_75%)]">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary border border-primary/20 shadow-sm mb-2">
            {label?.includes("Coordinator") ||
            label === "Chair" ||
            label === "Vice Chair" ||
            label === "Secretary" ? (
              <User className="h-6 w-6" />
            ) : (
              <Users className="h-6 w-6" />
            )}
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground line-clamp-1">
            {label ?? "Team"}
          </span>
        </div>
      )}
    </div>
  );
}
