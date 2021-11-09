import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'
import HomepageFeatures from '../components/HomepageFeatures'
// import Image from '@theme/IdealImage'
// import logo from './assets/images/logo.png'
import useBaseUrl from '@docusaurus/useBaseUrl'

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext()
	return (
		<header className={clsx('hero hero--primary', styles.heroBanner)}>
			<div className='container'>
				{/* <h1 className='hero__title'>{siteConfig.title}</h1> */}
				<img src={useBaseUrl('/img/Lorros_lrg-wht.png')} />
				<p className='hero__subtitle'>{siteConfig.tagline}</p>
				<div className={styles.buttons}>
					<a
						className='button button--info button--lg margin-left--xs margin-right--xs'
						href='https://lorros34.meteorapp.com/'
						target='_blank'
						rel='noopener noreferrer'
					>
						Log In
					</a>
					<a
						className='button button--info button--lg margin-left--xs margin-right--xs'
						href='https://lorros34.meteorapp.com/auth/register'
						target='_blank'
						rel='noopener noreferrer'
					>
						Register
					</a>
					{/* <Link
						className='button button--info button--lg margin-left--xs margin-right--xs'
						to='/docs/intro'
					>
						User Manual
					</Link> */}
				</div>
			</div>
		</header>
	)
}

export default function Home() {
	const { siteConfig } = useDocusaurusContext()
	return (
		<Layout
			title={siteConfig.title}
			// title={`Hello from ${siteConfig.title}`}
			description='democratic decision making for boards and committees'
		>
			<HomepageHeader />
			<main>
				<HomepageFeatures />
			</main>
		</Layout>
	)
}
