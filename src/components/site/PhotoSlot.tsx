const skillQuestPhoto = { url: "/gallery/photo-08.webp" };
/**
 * PhotoSlot — intentionally empty image frame.
 *
 * TO ADD A PHOTO: replace the inner placeholder block with
 *   <img src={yourImport} alt={label} className="h-full w-full object-cover" />
 */
export function PhotoSlot({
  label,
  ratio = "aspect-[4/5]",
}: {
  label?: string;
  ratio?: string;
}) {
  return (
    <div
      className={`${ratio} w-full overflow-hidden rounded-xl border border-dashed border-border bg-surface`}
    >
      {label?.includes("Skill Quest") ? <img src={skillQuestPhoto.url} alt="Skill Quest participants on stage" className="h-full w-full object-cover" /> : null}
      {!label?.includes("Skill Quest") && <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_50%_30%,color-mix(in_oklab,var(--primary)_14%,transparent),transparent_70%)]">
        <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {label ?? "Photo"}
        </span>
      </div>}
    </div>
  );
}
