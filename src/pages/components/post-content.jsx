import { useNavigate } from 'react-router-dom';
import { XBtn } from '../../components/ui';
import { SpecialPanel } from './special-panel';
export function PostContent({
	className,
	post: { id, title, image_url, content, published_at },
}) {
	const navigate = useNavigate();

	return (
		<div className={className}>
			<h2 className="font-bold text-2xl my-10">{title}</h2>
			<img src={image_url} alt={title} />
			<SpecialPanel
				className="-mt-5 mx-0 mb-5"
				id={id}
				publishedAt={published_at}
				editButton={
					<XBtn
						icon="mdi-pencil-box-outline"
						onClick={() => navigate(`/post/${id}/edit`)}
					/>
				}
			/>
			<div className="text-lg whitespace-pre-line">{content}</div>
		</div>
	);
}
