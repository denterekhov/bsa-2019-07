import authRoutes from './auth.routes';
import postRoutes from './post.routes';
import userRoutes from './user.routes';

export default (app) => {
    app.use('/api/auth', authRoutes);
    app.use('/api/posts', postRoutes);
    app.use('/api/users', userRoutes);
};