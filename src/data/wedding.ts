export type NavItem = {
  id: string
  label: string
}

export type DetailItem = {
  label: string
  value: string
}

export type ScheduleItem = {
  time: string
  event: string
}

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'story', label: 'Story' },
  { id: 'schedule', label: 'Schedule' },
  { id: 'rsvp', label: 'RSVP' },
]

export const details: DetailItem[] = [
  { label: 'Venue', value: 'Rosewood Garden Estate' },
  { label: 'Date', value: 'Saturday, June 14' },
  { label: 'Dress', value: 'Formal garden attire' },
]

export const schedule: ScheduleItem[] = [
  { time: '3:00 PM', event: 'Garden ceremony' },
  { time: '4:30 PM', event: 'Cocktails and portraits' },
  { time: '6:00 PM', event: 'Dinner reception' },
]
