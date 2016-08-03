/*eslint-env mocha */

import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'
import App from './App'

describe('The main app component', () => {
	it('Should render a heading', () => {
		const props = {
			msg: "Hello World"
		}
		const el = shallow(<App {...props} />)
		expect(el.contains(props.msg))
	})
	it('Should error when no title is defined', () => {
		let spy = expect.spyOn(console, 'error')
		shallow(<App />)
		expect(spy).toHaveBeenCalled()
		spy.restore()
	})
})
