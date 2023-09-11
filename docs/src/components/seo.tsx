import { NextSeo, NextSeoProps } from "next-seo"
import app from "../../app.json"

export const SEO: React.FC<Pick<NextSeoProps, "description" | "title">> = ({
  description,
  title,
}) => (
  <NextSeo
    description={description}
    openGraph={{ title, description }}
    title={title}
    titleTemplate={app.seo.titleTemplate}
  />
)
