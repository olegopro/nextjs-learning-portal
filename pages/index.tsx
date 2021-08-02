import { GetStaticProps } from 'next'
import React, { useState } from 'react'
import { Button, Htag, P, Rating, Tag } from '../components'
import { withLayout } from '../layout/Layout'
import axios from 'axios'
import { MenuItem } from '../interfaces/menu.interfaces'

function Home({ menu }: HomeProps): JSX.Element {
	const [rating, setRating] = useState<number>(4)

	return (
		<>
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
			<ul>
				{menu.map(m => (
					<li key={m._id.secondCategory}>{m._id.secondCategory}</li>
				))}
			</ul>
		</>
	)
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0
	const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBPLIC_DOMAIN + '/api/top-page/find', {
		firstCategory
	})
	return {
		props: { menu, firstCategory }
	}
}

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[]
	firstCategory: number
}
