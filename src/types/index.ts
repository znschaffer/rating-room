export interface Image {
	_type: 'image';
	asset: {
		_ref: string;
		_type: 'reference';
	};
}
export interface Rating {
	_key: string;
	comments?: string;
	emotion?: Ref;
	name: 'xyn' | 'zane';
	rating?: number;
}
export interface Emotion {
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: 'emotion';
	_updatedAt: string;
	description?: string;
	image?: Image;
	name: string;
}

export interface Tag {
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: 'tag';
	_updatedAt: string;
	name: string;
	image?: Image;
}
export interface Ref {
	_key?: string;
	_ref: string;
	_type: 'reference' | 'tag';
}
export interface Product {
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: 'product';
	_updatedAt: string;
	description: string;
	image?: Image;
	name: string;
	rating?: Ref[] | Rating[];
	tags?: Ref[] | Tag[];
	url?: string;
	subname?: string;
}
