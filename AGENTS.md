<!-- LOVABLE:BEGIN -->

> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

<!-- LOVABLE:END -->

- Keep public Aarna content in TanStack route files and shared site components; this preserves independently shareable Home, About, Events, Agenda, Team, and Gallery pages.
- Keep static event-gallery imagery as Lovable Assets pointers; the gallery remains available without a live Drive connection.
- Store light and dark visual roles in src/styles.css semantic tokens; this keeps both modes consistent across the site.
- Compose the Home hero from an inline SVG Aarna mark, CSS light sweep, GSAP pixel assembly, and Motion spring parallax; this preserves the Aarna shape while keeping animation performant.
