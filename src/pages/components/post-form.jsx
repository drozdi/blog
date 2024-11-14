import { useLayoutEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { savePost } from '../../actions';
import { repPost } from '../../bff/rep';
import { XBtn, XIcon, XInput } from '../../components/ui';
export function PostForm({ post: { id, title, image_url, content, published_at } }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [imageUrlValue, setImageUrlValue] = useState('');
	const [titleValue, setTitleValue] = useState('');
	const contentRef = useRef(null);
	useLayoutEffect(() => {
		setImageUrlValue(image_url);
		setTitleValue(title);
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
		<div>
			<div className="flex justify-end items-center">
				<div>
					{published_at && (
						<XIcon className="mr-2">mdi-calendar-text-outline</XIcon>
					)}
					{published_at}
				</div>
			</div>
			<XInput
				onChange={({ target }) => setImageUrlValue(target.value)}
				value={imageUrlValue}
				outline={true}
				label="Изображение"
				placeholder="Изображение..."
			/>
			<br />
			<XInput
				onChange={({ target }) => setTitleValue(target.value)}
				value={titleValue}
				outline={true}
				label="Заголовок"
				placeholder="Заголовок..."
			/>

			<div
				ref={contentRef}
				className="post-text"
				contentEditable={true}
				suppressContentEditableWarning={true}
			>
				{content}
			</div>
			<div className="flex justify-center items-center my-4">
				<XBtn icon="mdi-content-save-edit" color="positive">
					Сохранить
				</XBtn>
			</div>
		</div>
	);
}
