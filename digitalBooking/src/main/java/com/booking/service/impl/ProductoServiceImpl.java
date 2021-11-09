package com.booking.service.impl;
import com.booking.entity.Producto;
import com.booking.exceptions.InvalidDataException;
import com.booking.exceptions.NotExistDataException;
import com.booking.exceptions.ResourcesNotFoundException;
import com.booking.repository.IProductoRepository;
import com.booking.service.ICategoriaService;
import com.booking.service.IProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service("ProductoServiceImpl")
public class ProductoServiceImpl implements IProductoService {

    @Autowired
    private IProductoRepository productoRepository;
    @Autowired
    private ICategoriaService categoriaService;


    @Override
    public Producto insert(Producto producto) throws InvalidDataException, NotExistDataException, ResourcesNotFoundException, IOException {
        if(producto.getDescripcion() == null || producto.getNombre() ==null || producto.getNombre().trim() == "" || producto.getDescripcion().trim() == "")
            throw  new NotExistDataException("el campo del nombre o el campo de la descripcion se encuentra vacio o la categoria seleccionada no existe");
        else if(producto.getDescripcion().trim().length()>250 || producto.getNombre().trim().length()>50)
            throw new InvalidDataException("no es valida la cantidad de caracteres que tiene la descripcion (no puede ser mayor a 250 caracteres)\n o el nombre (no puede ser mayor a 50 caracteres) ");

        producto.setCategoria(categoriaService.readOne(producto.getCategoria().getId()).get());
        return productoRepository.save(new Producto(producto.getNombre(),producto.getDescripcion(), producto.getCategoria(),producto.getCiudad(),producto.getCaracteristicas()));
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

