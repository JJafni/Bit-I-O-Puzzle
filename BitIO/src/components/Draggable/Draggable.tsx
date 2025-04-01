import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

const Draggable = (props: any) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: props.id,
  });

  const style: React.CSSProperties = {
    transform: CSS.Translate.toString(transform),
    cursor: isDragging ? 'grabbing' : 'grab',
    boxShadow: isDragging ? '0 4px 10px rgba(0, 0, 0, 0.2)' : 'none',
    transition: 'transform 0.1s ease-out', // smooth transition when dragged
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '8px',
    backgroundColor: '#4CAF50',
    color: 'white',
    outline: 'none',
    userSelect: 'none' as 'none', // Cast the value to the correct type
    opacity: isDragging ? 0.8 : 1, // slightly fade out when dragging
    zIndex: isDragging ? 1000 : 'auto', // Bring to front when dragging
  };

  return (
    <button
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      aria-grabbed={isDragging ? 'true' : 'false'} // Adds accessibility
    >
      {props.children}
    </button>
  );
};

export { Draggable };
