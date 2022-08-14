import React, { useContext } from 'react'
import {ComponentF} from './ComponentF'
import { UserContext, ChannelContext } from '../useContext';

export function ComponentE() {
 const user = useContext(UserContext)
 const channel = useContext(ChannelContext)


		return (
			<div>
				{user} - {channel}
			</div>
		)
	}


