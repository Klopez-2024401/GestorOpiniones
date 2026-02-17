import Post from "./post.model.js";

export const createPost = async (req, res) => {
    const post = new Post({
        ...req.body,
        user: req.uid
    });

    await post.save();
    res.status(201).json(post);
};

export const updatePost = async (req, res) => {
    const post = await Post.findById(req.params.id);

    if (!post) return res.status(404).json({ message: 'No encontrado' });

    if (post.user.toString() !== req.uid) {
        return res.status(403).json({ message: 'No autorizado' });
    }

    const updated = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
};

export const deletePost = async (req, res) => {
    const post = await Post.findById(req.params.id);

    if (post.user.toString() !== req.uid) {
        return res.status(403).json({ message: 'No autorizado' });
    }

    await post.deleteOne();
    res.json({ message: 'Eliminado' });
};