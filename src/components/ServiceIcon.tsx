import { Building2, Hammer, Home, Layers, Truck, type LucideProps } from 'lucide-react'
import type { Service } from '../data/site'

const map = { truck: Truck, home: Home, building: Building2, stairs: Layers, hammer: Hammer }

export default function ServiceIcon({ name, ...props }: { name: Service['icon'] } & LucideProps) {
  const Icon = map[name]
  return <Icon aria-hidden {...props} />
}
