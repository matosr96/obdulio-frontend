import React from 'react'
import { SidebarMenuCard } from '../types/types'
import classNames from '../utils/clases';
import '../styles/SidebarMenuCardView.scss'

interface SidebarMenuCardViewProps {
  card: SidebarMenuCard;
  isOpen: boolean;
}

export default function SidebarMenuCardView({card, isOpen}: SidebarMenuCardViewProps) {
  return (
    <div className='SidebarMenuCardView'>
      <img className='profile' src={card.photoUrl} width="100%"/>
      <div className={classNames("profileInfo", isOpen ? "" : "collapsed")}>
        <div className='name'>{card.displayName}</div>
        <div className='title'>{card.title}</div>
        <div className='url'>
          <a href={card.url}> Ir al perfil </a>
        </div>
      </div>
    </div>
  )
}

