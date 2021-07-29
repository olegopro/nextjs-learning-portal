import styles from './Button.module.css'
import { ButtonProps } from './Button.props'
import cs from 'classnames'
import ArrowIcon from './arrow.svg'
export const Button = ({ appearance, children, className, arrow = 'none', ...props }: ButtonProps): JSX.Element => {
	return (
		<button
			className={cs(styles.button, className, {
				[styles.primary]: appearance == 'primary',
				[styles.ghost]: appearance == 'ghost'
			})}
			{...props}
		>
			{children}
			{arrow != 'none' && (
				<span className={cs(styles.arrow, { [styles.down]: arrow == 'down' })}>
					<ArrowIcon />
				</span>
			)}
		</button>
	)
}
