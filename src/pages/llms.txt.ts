import type { APIRoute } from "astro";

// Plain-text site overview for AI engines (llms.txt convention).
export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const abs = (p: string) => new URL(`${base}${p}`, site).href;
  const body = `# Scott's Provisions

Scott's Provisions is a chef-driven catering company serving workplaces, institutions, and events across San Jose, Silicon Valley, and the North, South, and East Bay. Built on the culinary foundation and hospitality standards of Scott's Seafood San Jose, it offers boxed meals, drop-off catering, full-service on-site catering, and full-service bar packages.

## Key pages

- Home: ${abs("/")}
- Services: ${abs("/services/")}
- Menus: ${abs("/menus/")}
- About: ${abs("/about/")}
- Contact: ${abs("/contact/")}

## Contact

- Email: provisions@scottshospitality.com
- Phone: (408) 971-1716
- Address: 88 S. 4th Street, 7th Floor, San Jose, CA 95112
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
