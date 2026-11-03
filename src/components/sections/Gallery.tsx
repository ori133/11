import Image from "next/image";
import Badge from "@/components/ui/Badge";
import Section from "@/components/ui/Section";
import type { Photo } from "@/lib/content";

export type GalleryItem = { photo: Photo; caption: string };

/** Uniform photo grid with a caption overlay. Photos are cropped to 4:3. */
export default function Gallery({
  items,
  eyebrow,
  title,
  text,
}: {
  items: GalleryItem[];
  eyebrow?: string;
  title?: string;
  text?: string;
}) {
  return (
    <Section>
      {(title || eyebrow) && (
        <div className="max-w-2xl">
          {eyebrow && <Badge className="mb-4">{eyebrow}</Badge>}
          {title && <h2 className="text-3xl font-bold">{title}</h2>}
          {text && <p className="mt-4 text-lg text-slate-600">{text}</p>}
        </div>
      )}
      <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
        {items.map(({ photo, caption }) => (
          <li
            key={photo.src}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 shadow-soft transition-shadow hover:shadow-tile"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 33vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent px-4 pb-3 pt-10 text-sm font-medium text-white">
              {caption}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
