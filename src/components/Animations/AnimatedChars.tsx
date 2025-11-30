import { motion } from 'framer-motion';

type AnimatedCharsProps = {
    text: string;
    delay?: number;
    animationType?: 'up' | 'fade' | 'scale';
};

export const AnimatedChars = ({
    text,
    delay = 0,
    animationType = 'up',
}: AnimatedCharsProps) => {
    return (
        <>
            {text.split('').map((char, i) => {
                const variants = {
                    up: { opacity: 0, y: 8 },
                    fade: { opacity: 0 },
                    scale: { opacity: 0, scale: 0.6 },
                };

                return (
                    <motion.span
                        key={`${char}-${i}`}
                        initial={variants[animationType]}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            delay: delay + i * 0.03,
                            duration: 0.2,
                        }}
                        style={{ display: 'inline-block' }}
                    >
                        {char}
                    </motion.span>
                );
            })}
        </>
    );
};
