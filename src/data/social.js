import {
  SiSlack,
  SiWordpress,
  SiYoutube,
  SiGithub,
  SiTwitter,
} from "react-icons/si"

const GitHub = {
  name: "GitHub",
  href: "https://github.com/wp-graphql/wp-graphql",
  icon: SiGithub,
}

const WP_Plugin = {
  name: "WordPress Plugin",
  href: "https://wordpress.org/plugins/wp-graphql",
  icon: SiWordpress,
}

export const socialHeaderLinks = [GitHub, WP_Plugin]

export const socialFooterLinks = [
  GitHub,
  WP_Plugin,
  {
    name: "Twitter",
    href: "https://twitter.com/wpgraphql",
    icon: SiTwitter,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/c/WPGraphQL",
    icon: SiYoutube,
  },
  {
    name: "Slack",
    href: "https://join.slack.com/t/wp-graphql/shared_invite/zt-3vloo60z-PpJV2PFIwEathWDOxCTTLA",
    icon: SiSlack,
  },
]
