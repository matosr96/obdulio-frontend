import React from 'react'

export default function classNames(... args: any[]):string {
  return args.filter(Boolean).join(" ");
}
