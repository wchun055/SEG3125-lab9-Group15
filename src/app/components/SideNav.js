'use client';

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { useNav } from '../context/NavContext';

export default function SideNav() {
  const { english } = useLanguage();
  const { isNavOpen } = useNav();

  const navItems = [
    { href: '/', label: english ? 'Home' : 'Accueil' },
    { href: '/locations', label: english ? 'Locations' : 'Lieux' },
    { href: '/services', label: english ? 'Services' : 'Services' },
    { href: '/technicians', label: english ? 'Team' : 'Équipe' },
    { href: '/booking', label: english ? 'Booking' : 'Réservation' },
    { href: '/feedback', label: english ? 'Feedback' : 'Avis' },
  ];

  return (
    <aside className={`fixed left-0 top-0 h-screen w-48 bg-white border-r border-gray-200 pt-24 px-4 overflow-y-auto z-40 hidden lg:flex flex-col transition-all duration-300 ${isNavOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="px-3 py-2 rounded text-sm text-slate-700 hover:bg-gray-100 transition font-medium"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
