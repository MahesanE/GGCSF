export interface Movie {
    // id: number;
    title: string;
    rating: number;
    byline: string;
    headline: string;
    summary: string;
    reviewUrl: string;
    image?: string;
    commentCount: number;
}

export interface SearchCriteria {
    title: string;
}

export interface Comments {
    name: string;
    rating: number;
    comment: string;
    movieName: string;
}