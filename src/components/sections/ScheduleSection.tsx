import type { DetailItem, ScheduleItem } from '../../data/wedding'
import { SectionKicker } from '../ui/SectionKicker'

type ScheduleSectionProps = {
  details: DetailItem[]
  schedule: ScheduleItem[]
}

export function ScheduleSection({ details, schedule }: ScheduleSectionProps) {
  return (
    <section
      id="schedule"
      className="relative z-10 mx-auto max-w-6xl px-5 py-16 sm:px-8"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {details.map((detail) => (
          <article key={detail.label} className="glass-panel rounded-2xl p-6">
            <SectionKicker>{detail.label}</SectionKicker>
            <h3 className="mt-4 font-serif text-3xl text-[#25211f]">
              {detail.value}
            </h3>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-3xl bg-[#2f4f46] p-6 text-white shadow-2xl shadow-[#2f4f46]/20 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d7e4dd]">
          Wedding Day
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {schedule.map((item) => (
            <div key={item.time} className="rounded-2xl bg-white/10 p-5">
              <p className="font-serif text-3xl">{item.time}</p>
              <p className="mt-3 text-sm text-white/75">{item.event}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
