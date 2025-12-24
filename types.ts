export type Category = 'All' | 'Installation' | 'Music Video' | 'App' | 'Archive' | 'Education' | 'Performance' | 'Lecture' | 'Album' | 'Release';
export type Pillar = 'Art' | 'Public' | 'Education' | 'Technology';
export type Language = 'JP' | 'EN' | 'TW';

export interface Work {
  id: string;
  title: string;
  client: string;
  category: Category;
  pillar: Pillar; 
  description: { [key in Language]: string };
  imageUrl: string;
  tags: string[];
  role: { [key in Language]: string };
  approach: { [key in Language]: string };
  techStack?: string[];
  featuredInTech?: boolean; // 2ch技術ページに表示するかどうかのフラグ
  externalUrl?: string; // 外部リンク（YouTube等）
}

export interface NavItem {
  label: { [key in Language]: string };
  path: string;
}