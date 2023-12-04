export interface ConfigBaseProps {
  persistNavigation: "always" | "dev" | "prod" | "never"
}

export type PersistNavigationConfig = ConfigBaseProps["persistNavigation"]

const BaseConfig: ConfigBaseProps = {
  // This feature is particularly useful in development mode, but
  // can be used in production as well if you prefer.
  persistNavigation: "dev",
}

export default BaseConfig
