import { useLayoutEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { savePost } from '../../actions';
import { repPost } from '../../bff/rep';
import { XBtn, XInput } from '../../components/ui';
import { SpecialPanel } from './special-panel';
import { sanitizeContent } from './utils';

export function PostForm({ post: { id, title, image_url, content, published_at } }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [imageUrlValue, setImageUrlValue] = useState('');
	const [titleValue, setTitleValue] = useState('');
	const contentRef = useRef(null);
	useLayoutEffect(() => {
		setImageUrlValue(image_url || '');
		setTitleValue(title || '');
	}, [image_url, title]);
	const onSave = () => {
		const newContent = sanitizeContent(contentRef.current.innerHTML);

		const newPostData = {
			id,
			image_url: imageUrlValue,
			title: titleValue,
			content: newContent,
		};

		dispatch(savePost(repPost, newPostData)).then(({ id }) => {
			navigate(`/post/${id}`);
		});
	};
	return (
		<div className="w-full">
			<XInput
				onChange={({ target }) => setImageUrlValue(target.value)}
				name="image_url"
				value={imageUrlValue}
				outline
				label="Изображение"
				placeholder="Изображение..."
			/>
			<br />
			<XInput
				onChange={({ target }) => setTitleValue(target.value)}
				value={titleValue}
				name="title"
				outline
				label="Заголовок"
				placeholder="Заголовок..."
			/>
			<SpecialPanel
				className="my-5"
				id={id}
				publishedAt={published_at}
				prepend={
					<XBtn
						icon="mdi-content-save-edit"
						onClick={onSave}
						title="Сохранить"
					/>
				}
			/>
			<div
				ref={contentRef}
				className="p-4 border border-separator rounded"
				contentEditable={true}
				suppressContentEditableWarning={true}
			>
				{content}
			</div>
		</div>
	);
}
