export interface UserComment
{
    // postId?: number;
    commentId?: number;
    userId?: number;
    body ?: string;
    likes?: number;
    replies?: number;
    liked?:boolean;
}