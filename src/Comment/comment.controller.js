import Comment from "./comment.model.js";

export const createComment = async (req, res) => {
    try {
        const comment = new Comment({
            content: req.body.content,
            post: req.body.post,
            user: req.uid
        });

        await comment.save();

        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear comentario' });
    }
};

export const updateComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);

        if (!comment) {
            return res.status(404).json({ message: 'Comentario no encontrado' });
        }

        if (comment.user.toString() !== req.uid) {
            return res.status(403).json({ message: 'No autorizado' });
        }

        comment.content = req.body.content;
        await comment.save();

        res.json(comment);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar comentario' });
    }
};

export const deleteComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);

        if (!comment) {
            return res.status(404).json({ message: 'Comentario no encontrado' });
        }

        if (comment.user.toString() !== req.uid) {
            return res.status(403).json({ message: 'No autorizado' });
        }

        await comment.deleteOne();

        res.json({ message: 'Comentario eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar comentario' });
    }
};

