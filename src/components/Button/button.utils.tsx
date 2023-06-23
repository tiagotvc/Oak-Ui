type btnType = 'primary' | 'secondary' | 'dark' | 'sucess' | 'danger' | 'gradient'

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement>{
    type: btnType
    children: React.ReactNode
}