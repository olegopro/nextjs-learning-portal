import React, { useState } from 'react'
import { Button, Htag, P, Rating, Tag } from '../components'
import { Layout } from '../layout/Layout'

export default function Home(): JSX.Element {
	const [rating, setRating] = useState<number>(4)
	return (
		<Layout>
			<Htag tag="h1">Текст</Htag>
			<Button appearance="primary" arrow="right">
				Кнопка
			</Button>
			<Button appearance="ghost" arrow="down">
				Кнопка
			</Button>
			<P size="l">Большой</P>
			<P>Средний</P>
			<P size="l">Маленький</P>
			<Tag size="s">Small</Tag>
			<Tag size="m">Medium</Tag>
			<Tag size="s" color="green">
				Small green
			</Tag>
			<Rating rating={rating} isEditable setRating={setRating} />
		</Layout>
	)
}
