import styles from './Textarea.module.css'
import { TextareaProps } from './Textarea.props'
import cn from 'classnames'
import { ForwardedRef, forwardRef } from 'react'

export const Textareat = forwardRef(
	({ className, ...props }: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
		return <textarea className={cn(className, styles.input)} {...props} />
	}
)
