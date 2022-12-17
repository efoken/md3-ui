import { Box, Grid, Link, Text } from "@md3-ui/core"
import { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { Layout } from "../src/layouts/layout"

interface IntroductionCardProps {
  copy: string
  headline: string
  image: { alt: string; src: string }
  link?: { href: string; label: string }
}

export const IntroductionCard: React.FC<IntroductionCardProps> = ({
  copy,
  headline,
  image,
  link,
}) => (
  <Grid container spacing={3} sx={{ mb: 9 }}>
    <Grid item span={{ compact: 12, expanded: 6 }}>
      <Box sx={{ flexShrink: 1 }}>
        <Text variant="headline-large">{headline}</Text>
        <Text
          color="onSurfaceVariant"
          variant="headline-small"
          sx={{ mb: 1.75, mt: 3 }}
        >
          {copy}
        </Text>
        {link && (
          <Link
            href={link.href}
            hrefAttrs={{ target: "blank" }}
            sx={{ alignSelf: "flex-start", fontSize: 24, lineHeight: 28 }}
          >
            {link.label}
          </Link>
        )}
      </Box>
    </Grid>
    <Grid item span={{ compact: 12, expanded: 6 }}>
      <Box
        sx={{
          aspectRatio: 660 / 362,
          borderColor: "rgba(0, 0, 0, 0.2)",
          borderRadius: 10,
          borderWidth: 1,
          flexShrink: 1,
          overflow: "hidden",
          width: "100%",
        }}
      >
        <Image
          src={image.src}
          width={712}
          height={511}
          layout="fill"
          alt={image.alt}
        />
      </Box>
    </Grid>
  </Grid>
)

const Home: NextPage = () => (
  <Layout>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Box sx={{ bgColor: "primary" }}>
      <Box sx={{ maxWidth: 1488, mx: "auto", p: 9 }}>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39.5 20c0 10.77-8.73 19.5-19.5 19.5S.5 30.77.5 20 9.23.5 20 .5 39.5 9.23 39.5 20Z"
            stroke="#fff"
          />
          <path d="M6.5 6.5h27v27h-27v-27Z" stroke="#fff" />
          <mask id="a" fill="#fff">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M33.928 6.07 20 33.928 6.07 6.07"
            />
          </mask>
          <path
            d="m20 33.928-.895.447.895 1.788.894-1.788-.894-.447ZM33.034 5.623 19.105 33.48l1.79.895L34.822 6.518l-1.789-.895ZM20.894 33.48 6.966 5.623l-1.79.895 13.93 27.857 1.788-.895Z"
            fill="#fff"
            mask="url(#a)"
          />
        </svg>

        <Text color="onPrimary" variant="display-large">
          Material 3 UI
        </Text>
        <Text color="onPrimary" variant="headline-small">
          Get started with the Material 3 Design System for React Native.
        </Text>
      </Box>
    </Box>

    <Box sx={{ maxWidth: 1488, mx: "auto", p: 9 }}>
      <IntroductionCard
        headline="Guidance"
        copy={`Material.io supports this design kit with documentation and guidance for how to use the components and styles.

Our specifications have been updated for Material You to provide for additional guidance for modern styling, adaptive guidance, and color.`}
        link={{
          label: "Material.io",
          href: "https://m3.material.io/",
        }}
        image={{
          src: "/screen-shot-2021-09-13-at-12-15-1.jpg",
          alt: "Material.io",
        }}
      />
      <IntroductionCard
        headline="Typography"
        copy={`Google Fonts makes it easy to bring personality and performance to your websites and products. Our catalog of open-source fonts makes it easy to integrate expressive type and icons seamlessly—no matter where you are in the world.

Our font catalog places typography front and center, inviting you to explore, sort, and test fonts for use in more than 135 languages.`}
        link={{
          label: "fonts.google.com",
          href: "https://fonts.google.com/",
        }}
        image={{
          src: "/screen-shot-2021-09-13-at-12-15-2.jpg",
          alt: "fonts.google.com",
        }}
      />
      <IntroductionCard
        headline="Icons"
        copy={`For the official Material Design icons, use our stickersheet, managed by Google Fonts team. Material Icons are available in five styles and a range of downloadable sizes and densities. The icons are crafted based on the core design principles and metrics of Material Design guidelines. 

The icon stickersheet is regularly maintained and updates are published bi-weekly. `}
        link={{
          label: "figma.com/@googlefonts",
          href: "https://www.figma.com/community/file/1014241558898418245/Material-Design-Icons",
        }}
        image={{
          src: "/screen-shot-2021-09-13-at-12-15-3.jpg",
          alt: "figma.com/@googlefonts",
        }}
      />
      <IntroductionCard
        headline="Colors"
        copy={`Material You reimagines color as a more individualized experience with dynamic and accessible color expression. 

Use the Material Theme Builder to visualize dynamic color, build a custom theme, and export code through generated Material Design tokens. Built to work seamlessly with Material Design components.`}
        link={{
          label: "Material You Figma Plugin",
          href: "https://goo.gle/material-theme-builder-figma",
        }}
        image={{
          src: "/screen-shot-2021-09-13-at-12-15-4.jpg",
          alt: "Material Theme Builder",
        }}
      />
    </Box>
  </Layout>
)

export default Home
