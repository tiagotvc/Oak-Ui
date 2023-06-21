type btnType = 'primary' | 'secondary' | 'dark' | 'light' | 'rounded' | 'icon'

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement>{
    type: btnType
    children: React.ReactNode
}