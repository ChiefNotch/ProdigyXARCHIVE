import type { Category } from "./categories"

export interface CategoryContext {
    hack: (name: string, description: string, onClick: HackFunction) => void
    toggle: (name: string, onClick: ToggleFunction, getDefaultValue?: (hack: any, player: any) => boolean) => void
}

export const hackRegistry: HackData[] = []

export const hack = (data: HackData): void => {
    hackRegistry.push(data)
}

export const withCategory = (category: Category, func: (ctx: CategoryContext) => void) => {
    func({
        hack: (name, description, onClick) => hack({ category, name, description, onClick, type: "hack" }),
        toggle: (name, onClick, getDefaultValue = () => false) => hack({ category, name, onClick, getDefaultValue, type: "toggle" })
    })
}
