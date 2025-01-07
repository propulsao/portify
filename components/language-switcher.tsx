/* "use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next-intl/client';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <Select value={locale} onValueChange={handleChange}>
      <SelectTrigger className="w-[100px]">
        <SelectValue>
          {locale === 'en' ? '🇺🇸 EN' : '🇧🇷 PT'}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">🇺🇸 EN</SelectItem>
        <SelectItem value="pt">🇧🇷 PT</SelectItem>
      </SelectContent>
    </Select>
  );
} */