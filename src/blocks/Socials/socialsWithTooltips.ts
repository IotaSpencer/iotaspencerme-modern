import type { SocialsProps } from './socials'

export type SocialsWithTooltipsProps = SocialsProps & {
    tooltips?: boolean | Record<string, string>
}
