from PIL import Image

image = 'public/images/el.jfif'  # 1600, 900
out_file = 'e-learning.png'

img = Image.open(image)

size = (337.59, 190)
img.thumbnail(size)

img.save(out_file)