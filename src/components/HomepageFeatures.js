import React from 'react'
import clsx from 'clsx'
import styles from './HomepageFeatures.module.css'

const FeatureList = [
	{
		title: 'Easy to Use',
		Svg: require('../../static/img/easy-to-use.svg').default,
		description: (
			<>
				LORROS is designed to be simple to use for all members of your group,
				but robust enough for the Administrator to manage multiple groups,
				committees (sub groups) and guests.
			</>
		),
	},
	{
		title: 'Always Available',
		Svg: require('../../static/img/available.svg').default,
		description: (
			<>
				Getting Group members (committees, boards, etc.) together for meetings
				can often be a daunting task. LORROS is online an available all the
				time. No more scheduling conflicts!
			</>
		),
	},
	{
		title: 'Better Decision Making',
		Svg: require('../../static/img/better.svg').default,
		description: (
			<>
				When a group makes a decision collectively, its judgment can be keener
				than an individual. Through discussion, and collaboration, groups can
				identify more complete and robust solutions.
			</>
		),
	},
]

function Feature({ Svg, title, description }) {
	return (
		<div className={clsx('col col--4')}>
			<div className='text--center'>
				<Svg className={styles.featureSvg} alt={title} />
			</div>
			<div className='text--center padding-horiz--md'>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	)
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className='container'>
				<div className='row'>
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	)
}
