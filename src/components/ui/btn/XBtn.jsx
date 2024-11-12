import classNames from 'classnames';
import PropTypes from 'prop-types';
import { forwardRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useBtn } from '../../../hooks/useBtn';
import { useXBtnGroupContext } from '../btnGroup';
import { XIcon } from '../icon';
import './XBtn.scss';

const XBtnRoot = forwardRef(function XBtn(params = {}, ref) {
	const props = useXBtnGroupContext(params);
	const {
		children,
		className,
		dimmed,
		flat,
		text,
		tonal,
		plain,
		outline,
		round,
		block,
		square,
		rounded,
		active,
		link,
		icon,
		iconRight,
		color,
		size,
	} = props;

	const { isSelected: isSel, attrs, TagProp } = useBtn({ ...props, ref });

	const isIcon = useMemo(
		() =>
			(!!icon != !!iconRight && !children) ||
			(children?.type === XIcon && !icon && !iconRight),
		[children, icon, iconRight],
	);
	const isSelected = useMemo(() => active || isSel, [isSel, active]);

	return (
		<TagProp
			{...attrs}
			className={classNames(
				'x-btn',
				{
					'x-btn--flat': flat || link,
					'x-btn--text': text,
					'x-btn--tonal': tonal,
					'x-btn--plain': plain,
					'x-btn--outline': outline,
					'x-btn--block': block,
					'x-btn--square': square,
					'x-btn--round': round,
					'x-btn--rounded': rounded,
					'x-btn--dimmed': dimmed,
					'x-btn--icon': isIcon,
					'x-btn--link': link,

					'x-btn--selected': isSelected,
					[`x-btn--${color}`]: color,
					[`x-btn--${size}`]: size,
				},
				className,
			)}
		>
			<div className="x-btn-outline"></div>
			<div className="x-btn-backdor"></div>
			{icon && <XIcon className={!isIcon && '-ml-2 mr-2'}>{icon}</XIcon>}
			{children && <span className="x-btn-content">{children}</span>}
			{iconRight && <XIcon className={!isIcon && 'ml-2 -mr-2'}>{iconRight}</XIcon>}
		</TagProp>
	);
});

XBtnRoot.defaultProps = {
	children: null,
	className: null,
	icon: '',
	iconRight: '',
	color: '',
	size: '',
	onClick: () => {},
	value: undefined,
	LinkComponent: Link,
	target: '_self',
	to: undefined,
	href: undefined,
};
XBtnRoot.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
	dimmed: PropTypes.bool,
	flat: PropTypes.bool,
	text: PropTypes.bool,
	tonal: PropTypes.bool,
	plain: PropTypes.bool,
	outline: PropTypes.bool,

	round: PropTypes.bool,
	block: PropTypes.bool,
	square: PropTypes.bool,
	rounded: PropTypes.bool,
	disabled: PropTypes.bool,
	active: PropTypes.bool,
	link: PropTypes.bool,

	icon: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
	iconRight: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
	color: PropTypes.PropTypes.string,
	size: PropTypes.PropTypes.string,
	onClick: PropTypes.func,

	value: PropTypes.any,
	LinkComponent: PropTypes.oneOfType([
		PropTypes.any,
		PropTypes.instanceOf(Link),
		PropTypes.func,
		PropTypes.element,
		PropTypes.string,
		PropTypes.node,
	]),
	target: PropTypes.string,
	to: PropTypes.any,
	href: PropTypes.any,
}; //*/
XBtnRoot.displayName = 'XBtn';
export const XBtn = XBtnRoot;
