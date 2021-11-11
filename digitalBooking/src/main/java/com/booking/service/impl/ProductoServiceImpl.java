package com.booking.service.impl;
import com.booking.entity.Imagen;
import com.booking.entity.Producto;
import com.booking.exceptions.InvalidDataException;
import com.booking.exceptions.NotExistDataException;
import com.booking.exceptions.ResourcesNotFoundException;
import com.booking.repository.IProductoRepository;
import com.booking.service.ICategoriaService;
import com.booking.service.ICiudadService;
import com.booking.service.IProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service("ProductoServiceImpl")
public class ProductoServiceImpl implements IProductoService {

    @Autowired
    private IProductoRepository productoRepository;
    @Autowired
    private ICategoriaService categoriaService;
    @Autowired
    private ICiudadService ciudadService;
    @Autowired
    private StorageService storageService;


    @Override
    public Producto insert(Producto producto, List<MultipartFile> files) throws InvalidDataException, NotExistDataException, ResourcesNotFoundException, IOException {
        Set<Imagen> imagenes = new HashSet<>();
        categoriaService.readOne(producto.getCategoria().getId()).get();
        ciudadService.readOne(producto.getCiudad().getId()).get();
        if(producto.getDescripcion() == null || producto.getNombre() ==null || producto.getNombre().trim() == "" || producto.getDescripcion().trim() == "")
            throw  new NotExistDataException("el campo del nombre o el campo de la descripcion se encuentra vacio o la categoria seleccionada no existe");
        else if(producto.getDescripcion().trim().length()>250 || producto.getNombre().trim().length()>50)
            throw new InvalidDataException("no es valida la cantidad de caracteres que tiene la descripcion (no puede ser mayor a 250 caracteres)\n o el nombre (no puede ser mayor a 50 caracteres) ");

        Producto producto2 = productoRepository.save(new Producto(producto.getNombre(),producto.getDescripcion(), producto.getCategoria(),producto.getCiudad()));
        if(files != null && !files.isEmpty() && files.size() > 0) {
            for(int i = 0; i<files.size(); i++){
                String imagen = storageService.uploadFile(files.get(i),"/categorias");
                Imagen imagen2 = new Imagen();
                imagen2.setImagen(imagen);
                imagen2.setProducto(producto2);
                imagen2.setTitulo("pp");
                imagenes.add(imagen2);
            }
        }
        producto2.setCaracteristicas(producto.getCaracteristicas());
        producto2.setImagenes(imagenes);
        return productoRepository.save(producto2);
    }

    @Override
    public List<Producto> readAll(){
        return productoRepository.findAll();
    }

    @Override
    public Optional<Producto> readOne(Long id) throws ResourcesNotFoundException{
        Optional<Producto> productos = productoRepository.findById(id);
        if(!productos.isPresent())
            throw new ResourcesNotFoundException("el producto con Id "+ id+ " no existe");
        return productos;
    }

    @Override
    public List<Producto> getProductsByCategory(String titulo) throws ResourcesNotFoundException {
        List<Producto> productosPorCategoria = productoRepository.getProductsByCategory(titulo);
        if (productosPorCategoria.size() == 0) {
            throw new ResourcesNotFoundException("los productos de categoria " + titulo + " no existen");
        }
        return productosPorCategoria;
    }

    @Override
    public List<Producto> getProductsByCity(String nombre) throws ResourcesNotFoundException{

        List<Producto> productosPorCiudad =  productoRepository.getProductsByCity(nombre);
        if (productosPorCiudad.size() == 0){
            throw new ResourcesNotFoundException("los productos de la ciudad" + nombre + " no existen");
        }
        return productosPorCiudad;
    }
}

